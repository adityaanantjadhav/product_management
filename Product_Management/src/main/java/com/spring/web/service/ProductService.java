package com.spring.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.spring.web.model.Product;
import com.spring.web.repository.ProductRepository;

public interface ProductService {
	
	
	public Product saveProduct(Product product);
	
	public List<Product> getAllProducts();
	
	public Product getProductById(int id);
	
	public String deleteProduct(int id);
}
