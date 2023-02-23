<?php

namespace App\Controller;

use App\Repository\BookRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class BooksListController extends AbstractController
{
    #[Route('/books', name: 'app_books_list', methods: ['GET'])]
    public function index(
        Request $request,
        BookRepository $bookRepository,
    ): JsonResponse {
        $title = $request->query->get('title');

        $books = $bookRepository->findAllWithTitle($title);

        return $this->json($books, context: ['groups' => ['book:read']]);
    }
}
