package facades;

import entities.Customer;
import entities.ItemType;
import entities.Order;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

/**
 *
 * @author hamad
 */
public class PersonFacade {

    private static PersonFacade instance;
    private static EntityManagerFactory emf;

    //Private Constructor to ensure Singleton
    private PersonFacade() {
    }

    /**
     *
     * @param _emf
     * @return an instance of this facade class.
     */
    public static PersonFacade getPersonFacade(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new PersonFacade();
        }
        return instance;
    }

    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    public Customer createCustomer(String name, String email) {
        if (name != null && !name.isEmpty() && email != null && !email.isEmpty()) {
            Customer c = new Customer(email, name);
            EntityManager em = getEntityManager();
            try {
                em.getTransaction().begin();
                em.persist(c);
                em.getTransaction().commit();
                return c;
            }finally {
                em.close();
            }
        }
        return null;
    }
    
    public Customer getCustomer (int id) {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            Customer c = em.find(Customer.class,id);
            em.getTransaction().commit();
            if(c != null) {
                return c;
            }
        }finally {
            em.close();
        }
        return null;
    }
    
    public List<Customer> getAllCustomer() {
        EntityManager em = getEntityManager();
        try{
            em.getTransaction().begin();
            List<Customer> cust = em.createNamedQuery("Customer.getAll").getResultList();
            em.getTransaction().commit();
            return cust;
        }finally {
            em.close();
        }
    }
    
    public ItemType createItemType(String name, String description, int price) {
        if(name != null && !name.isEmpty() && description != null && !description.isEmpty() && !(price <=0)) {
            EntityManager em = getEntityManager();
            ItemType it = new ItemType(name, description, price);
            try {
                em.getTransaction().begin();
                em.persist(it);
                em.getTransaction().commit();
            } finally {
                em.close();
            }
        }
        return null;
    }
    
    public ItemType getItemType(int id) {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            ItemType i = em.find(ItemType.class, id);
            em.getTransaction().commit();
            if(i != null) {
                return i;
            }
        }finally {
            em.close();
        }
        return null;
    }
    
    public Customer addOrderToCustomer(Customer c, Order o){
        if(c != null && o != null) {
            c.addOrders(o);
            EntityManager em = getEntityManager();
            try{
                em.getTransaction().begin();
                em.merge(c);
                em.getTransaction().commit();
            }finally {
                em.close();
            }
        }
        return null;
    }
    
}
