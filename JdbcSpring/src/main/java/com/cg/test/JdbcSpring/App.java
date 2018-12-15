package com.cg.test.JdbcSpring;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {
	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("spring.xml");

		EmployeeDAO dao = context.getBean("edao", EmployeeDAO.class);
		
		
		dao.saveEmployee(new Employee(102, "Amit", 35000));
		dao.saveEmployee(new Employee(101, "Krish", 40000));
		dao.saveEmployee(new Employee(103, "Jai", 55000));
		
		System.out.println("Data Added");
		
//		dao.deleteEmployee(new Employee(103));
//		
		((AbstractApplicationContext) context).close();
		
	}
}
