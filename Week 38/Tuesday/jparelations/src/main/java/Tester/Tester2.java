package Tester;

import entity.Customer;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import entity.Adress;

public class Tester2 {

    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu");
        EntityManager em = emf.createEntityManager();
        Customer cust = new Customer("Hamad", "Shah");
        Adress add = new Adress("Boulevard", "Ishøj");
        Adress add2 = new Adress("aevard", "Ishøj");
        //cust.setAddress(add);
        //add.setCustomer(cust);
        cust.addAddress(add);
        cust.addAddress(add2);
        try {
            em.getTransaction().begin();
            em.persist(cust);
            //em.persist(add);
            em.getTransaction().commit();
        } finally {
            em.close();
        }
//         em = emf.createEntityManager();
//         Adress found = em.find(Adress.class, cust.getAddress().getId());
//         System.out.println("Addresse " + found.getCustomer().getLastName());
        
    }

}
