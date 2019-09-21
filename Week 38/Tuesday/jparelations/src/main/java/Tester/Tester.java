//package Tester;
//
//import entity.Customer2;
//import javax.persistence.EntityManager;
//import javax.persistence.EntityManagerFactory;
//import javax.persistence.Persistence;
//
//
//public class Tester {
//    public static void main(String[] args) {
//            Customer2 cust = new Customer2("hamad");
//            cust.addHobby("Football");
//            cust.addHobby("Namaz");
//            cust.addHobby("Violin");
//            
//            EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu");
//            EntityManager em = emf.createEntityManager();
//            
//            try{
//                em.getTransaction().begin();
//                em.persist(cust);
//                em.getTransaction().commit();
//            }finally{
//                em.close();
//            }
////            em = emf.createEntityManager();
////            Customer2 found = em.find(Customer2.class, cust.getId());
////            System.out.println("Hobbies --> " + found.getHobbies());
//             
//    }
//    
//}
