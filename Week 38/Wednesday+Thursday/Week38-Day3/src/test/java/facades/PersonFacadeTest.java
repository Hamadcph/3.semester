//package facades;
//
//import utils.EMF_Creator;
//import entities.Person;
//import java.time.Instant;
//import java.util.ArrayList;
//import java.util.Date;
//import java.util.List;
//import java.util.logging.Level;
//import java.util.logging.Logger;
//import javax.persistence.EntityManager;
//import javax.persistence.EntityManagerFactory;
//import org.junit.jupiter.api.AfterAll;
//import org.junit.jupiter.api.AfterEach;
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import org.junit.jupiter.api.BeforeAll;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import utils.Settings;
//import utils.EMF_Creator.DbSelector;
//import utils.EMF_Creator.Strategy;
//
////Uncomment the line below, to temporarily disable this test
////@Disabled
//public class PersonFacadeTest {
//
//    private static EntityManagerFactory emf;
//    private static PersonFacade facade;
//    private Person p1 = new Person("Hamad", "Shah", "239889", Date.from(Instant.now()));
//    private Person p2 = new Person("Jabs", "Jabr", "219889", Date.from(Instant.now()));
//
//    public PersonFacadeTest() {
//    }
//
//    //@BeforeAll
//    public static void setUpClass() {
//        emf = EMF_Creator.createEntityManagerFactory(
//                "pu",
//                "jdbc:mysql://localhost:3307/startcode_test",
//                "dev",
//                "ax2",
//                EMF_Creator.Strategy.CREATE);
//        facade = PersonFacade.getFacadeExample(emf);
//    }
//
//    /*   **** HINT **** 
//        A better way to handle configuration values, compared to the UNUSED example above, is to store those values
//        ONE COMMON place accessible from anywhere.
//        The file config.properties and the corresponding helper class utils.Settings is added just to do that. 
//        See below for how to use these files. This is our RECOMENDED strategy
//     */
//    @BeforeAll
//    public static void setUpClassV2() {
//       emf = EMF_Creator.createEntityManagerFactory(DbSelector.TEST,Strategy.DROP_AND_CREATE);
//       facade = PersonFacade.getFacadeExample(emf);
//    }
//
//    @AfterAll
//    public static void tearDownClass() {
////        Clean up database after test is done or use a persistence unit with drop-and-create to start up clean on every test
//    }
//
//    // Setup the DataBase in a known state BEFORE EACH TEST
//    //TODO -- Make sure to change the script below to use YOUR OWN entity class
//    @BeforeEach
//    public void setUp() {
//        EntityManager em = emf.createEntityManager();
//        try {
//            em.getTransaction().begin();
//            em.createNamedQuery("Person.deleteAllRows").executeUpdate();
//            em.persist(new Person("hamad", "shah", "5969969", Date.from(Instant.now())));
//            em.persist(new Person("jabs", "jabr", "8936823", Date.from(Instant.now())));
//
//            em.getTransaction().commit();
//        } finally {
//            em.close();
//        }
//    }
//
//    @AfterEach
//    public void tearDown() {
////        Remove any data after each test was run
//    }
//
//    // TODO: Delete or change this method 
//    @Test
//    public void testAFacadeMethod() {
//        assertEquals(1, facade.getPersonCount(), "Expects two rows in the database");
//    }
//    
//    @Test
//    public void testGetPersonCount() {
//        long result = facade.getPersonCount(); 
//        long expected = 2; 
//        assertEquals(2,result); 
//    }
//    
//    @Test
//    public void testGetAllPersons() {
//        List<Person> result = facade.getAllPersons();
//        List<Person> expected = new ArrayList<>(); 
//        expected.add(p1); 
//        expected.add(p2); 
//        assertEquals(result.contains(p1), true); 
//        assertEquals(result.contains(p2), true); 
//    }
//    
//    @Test
//    public void testGetPersonName() {
//        try {
//            Person result = facade.getPersonName("Hamad");
//            Person expected = p1; 
//            assertEquals(expected, result);
//        } catch (Exception ex) {
//            Logger.getLogger(PersonFacadeTest.class.getName()).log(Level.SEVERE, null, ex);
//            
//        }
//    }
//    
//    @Test 
//    public void testAddMember() {
//        Person p1 = new Person("Hamad", "Shah", "398198", Date.from(Instant.now()));
//        Person p2 = new Person("d", "jab", "398198", Date.from(Instant.now()));
//         
//        assertEquals(facade.addPerson(p1), p1);
//        assertEquals(facade.addPerson(p2), p2); 
//    }
//    
//
//
//}
