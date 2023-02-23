<?php

namespace App\Repository;

use App\Entity\Book;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Book>
 *
 * @method Book|null find($id, $lockMode = null, $lockVersion = null)
 * @method Book|null findOneBy(array $criteria, array $orderBy = null)
 * @method Book[]    findAll()
 * @method Book[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BookRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Book::class);
    }

    public function save(Book $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Book $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function removeAll(): void
    {
        $this->createQueryBuilder('b')
            ->delete(Book::class, 'b')
            ->getQuery()
            ->execute()
            ;
    }

    public function findAllWithTitle(string $title = null)
    {
        $qb = $this->createQueryBuilder('b');
        if (!empty($title)) {
            $qb
                ->andWhere('b.title LIKE :title')
                ->setParameter('title', '%'.$title.'%')
                ;
        }

        return $qb->getQuery()->getResult();
    }
}
