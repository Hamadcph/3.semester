    package facades;

import entities.Movie;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

/**
 *
 * Rename Class to a relevant name Add add relevant facade methods
 */
public class MovieFacade {

    private static MovieFacade instance;
    private static EntityManagerFactory emf;

    //Private Constructor to ensure Singleton
    private MovieFacade() {
    }

    /**
     *
     * @param _emf
     * @return an instance of this facade class.
     */
    public static MovieFacade getFacadeMovie(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new MovieFacade();
        }
        return instance;
    }

    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    public long getMovieCount() {
        EntityManager em = emf.createEntityManager();
        try {
            long res = (long) em.createQuery("SELECT COUNT(r) FROM Movie r").getSingleResult();
            return res;
        } finally {
            em.close();
        }

    }

    public Movie addMovie(Movie movie) {
        EntityManager em = emf.createEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(movie);
            em.getTransaction().commit();
            return movie;
        }catch (Exception e){
            e.printStackTrace();    
        } finally {
            em.close();
        }
        return movie;
    }
    
    public List<Movie> getAllMovies(){
        EntityManager em = emf.createEntityManager();
        return em.createNamedQuery("Movie.getAll").getResultList();
    }
    
    public Movie getMovieName(String name) throws Exception {
        EntityManager em = getEntityManager();
        try {
            return em.createQuery("SELECT FROM Movie m WHERE m.name = :name", Movie.class).getSingleResult();
        } catch (Exception e) {
            e.printStackTrace();
            throw new Exception("Non found by that name");
        } finally {
            em.close();
        }
        
    }
}
//    public void populateMovies() {
//        EntityManager em = emf.createEntityManager();
//        try {
//            em.getTransaction().begin();
//            em.createNamedQuery("Movie.deleteAllRows").executeUpdate();
//            em.persist(new Movie(2000, "BeverlyHills1", "Eddie Murphy"));
//            em.persist(new Movie(2001, "BeverlyHills2", "Eddie Murphy" ));
//            em.persist(new Movie(2002, "BeverlyHills3", "Eddie Murphy"));
//            em.persist(new Movie(2003, "BeverlyHills14", "Eddie Murphy"));
//            em.getTransaction().commit();
//        } finally {
//            em.close();
//        }
//    }


