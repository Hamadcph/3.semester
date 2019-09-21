package facades;

import entities.Person;
import exception.PersonNotFoundException;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;


/**
 *
 * Rename Class to a relevant name Add add relevant facade methods
 */
public class PersonFacade implements IPersonFacade {

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
    
    @Override
    public Person addPerson(String fName, String lName, String phone) throws PersonNotFoundException {
        if (fName != null && !fName.isEmpty() && lName != null && !lName.isEmpty() && phone != null && !phone.isEmpty()) {
            EntityManager em = getEntityManager();
            try {
                em.getTransaction().begin();
                Person person = new Person(fName, lName, phone);
                em.persist(person);
                em.getTransaction().commit();
                return person;
            } catch (Exception e) {
                em.getTransaction().rollback();
                throw new PersonNotFoundException("Somethings missing");
            } finally {
                em.close();
            }
        } else {
            throw new PersonNotFoundException("Somethings missing");
        }
    }

   
    @Override
    public Person deletePerson(int id) throws PersonNotFoundException {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            Person person = em.find(Person.class, id);
            em.remove(person);
            em.getTransaction().commit();
            return person;
        } catch (Exception e) {
            throw new PersonNotFoundException("id not available");
        } finally {
            em.close();
        }
    }

   
    @Override
    public Person getPerson(int id) throws PersonNotFoundException {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            Person person = em.find(Person.class, id);
            em.getTransaction().commit();
            if (person != null) {
                return person;
            } else {
                throw new PersonNotFoundException("id doesnt exist");
            }
        } finally {
            em.close();
        }
    }

 
    @Override
    public List<Person> getAllPersons() {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            List<Person> persons = em.createNamedQuery("Person.getAll").getResultList();
            em.getTransaction().commit();
            return persons;
        } finally {
            em.close();
        }
    }


    @Override
    public Person editPerson(Person p) throws PersonNotFoundException {
        EntityManager em = getEntityManager();
        if (p.getFirstName() != null && !p.getFirstName().isEmpty() && p.getLastName() != null && !p.getLastName().isEmpty()) {
            try {
                em.getTransaction().begin();
                em.merge(p);
                em.getTransaction().commit();
                return p;
            } catch (Exception e) {
                throw new PersonNotFoundException(e.getMessage());
            } finally { 
                em.close();
            }
        } else {
            throw new PersonNotFoundException("name missing");
        }
    }

}
