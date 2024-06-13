package com.spring.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.web.model.Product;

public interface ProductRepository extends JpaRepository<Product,Integer>{

}
