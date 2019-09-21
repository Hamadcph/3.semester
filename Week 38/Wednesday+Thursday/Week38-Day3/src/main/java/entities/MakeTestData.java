/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entities;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;


/**
 *
 * @author hamad
 */
    public class MakeTestData {
    
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu");
        EntityManager em = emf.createEntityManager();
        try {
            Person bc1 = new Person("Hamad", "Shah", "131413");
                       
            em.getTransaction().begin(); //begin transaction
            em.persist(bc1);
          
            em.getTransaction().commit(); //commit transactions
        } finally {
            em.close();
        }
    }
    
}

    

