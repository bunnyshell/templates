<?php

namespace App\Controller;

use App\Entity\Book;
use App\Repository\BookRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\UnprocessableEntityHttpException;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class BooksEditController extends AbstractController
{
    #[Route('/books/{id}', name: 'app_books_edit', methods: ['PUT'])]
    public function index(
        int $id,
        Request $request,
        SerializerInterface $serializer,
        ValidatorInterface $validator,
        BookRepository $bookRepository,
    ): JsonResponse {
        $book = $bookRepository->find($id);

        if (null === $book) {
            throw $this->createNotFoundException();
        }

        $book = $serializer->deserialize($request->getContent(), Book::class, 'json', ['groups' => ['book:edit'], AbstractNormalizer::OBJECT_TO_POPULATE => $book]);

        $violations = $validator->validate($book, null, ['edit']);
        if (count($violations)) {
            $errors = [];
            foreach ($violations as $violation) {
                $errors[] = sprintf('%s -> %s', $violation->getPropertyPath(), $violation->getMessage());
            }

            throw new UnprocessableEntityHttpException(implode($errors));
        }

        $bookRepository->save($book, true);

        return $this->json($book, context: ['groups' => ['book:read']]);
    }
}
