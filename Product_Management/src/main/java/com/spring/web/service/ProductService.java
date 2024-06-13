package com.spring.web.service;

import java.util.List;

import com.spring.web.model.Product;

public interface ProductService {
	
	
	public Product saveProduct(Product product);
	
	public List<Product> getAllProducts();
	
	public Product getProductById(int id);
	
	public String deleteProduct(int id);
}
