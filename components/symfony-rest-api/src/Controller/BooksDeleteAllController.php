<?php

namespace App\Controller;

use App\Repository\BookRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BooksDeleteAllController extends AbstractController
{
    #[Route('/books', name: 'app_books_delete_all', methods: ['DELETE'])]
    public function index(
        BookRepository $bookRepository,
    ): JsonResponse {

        $bookRepository->removeAll();

        return new JsonResponse(null, Response::HTTP_NO_CONTENT);
    }
}
