<?php

namespace App\Controller;

use App\Entity\Book;
use App\Repository\BookRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\UnprocessableEntityHttpException;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class BooksCreateController extends AbstractController
{
    #[Route('/books', name: 'app_books_create', methods: ['POST'])]
    public function index(
        Request $request,
        SerializerInterface $serializer,
        ValidatorInterface $validator,
        BookRepository $bookRepository,
    ): JsonResponse {

        $book = $serializer->deserialize($request->getContent(), Book::class, 'json', ['groups' => ['book:create']]);

        $violations = $validator->validate($book, null, ['create']);
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
