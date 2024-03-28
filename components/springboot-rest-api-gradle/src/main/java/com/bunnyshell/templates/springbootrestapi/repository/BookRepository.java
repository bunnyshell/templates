package com.bunnyshell.templates.springbootrestapi.repository;

import com.bunnyshell.templates.springbootrestapi.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

    List<Book> findByAvailable(boolean isAvailable);
}
