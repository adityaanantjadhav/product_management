package com.spring.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.web.model.Product;
import com.spring.web.repository.ProductRepository;


@Service
public class ProductServiceImple implements ProductService{


	@Autowired
	private ProductRepository productRepo;
	
	@Override
	public Product saveProduct(Product product) {
		
		return productRepo.save(product);
	}

	@Override
	public List<Product> getAllProducts() {
		return productRepo.findAll();
	}

	@Override
	public Product getProductById(int id) {
		return productRepo.findById(id).get();
	}

	@Override
	public String deleteProduct(int id) {
		// TODO Auto-generated method stub
		Product ans=productRepo.findById(id).get();
		if(ans!=null) {
			productRepo.delete(ans);
			return "Product Deleted";
		}
		return "Something went wrong on server";
	}
	
}
