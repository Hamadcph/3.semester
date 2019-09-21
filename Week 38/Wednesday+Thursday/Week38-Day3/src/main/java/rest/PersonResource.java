package rest;

import DTO.PersonDTO;
import DTO.PersonsDTO;
import exception.PersonNotFoundException;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entities.Person;
import facades.IPersonFacade;
import utils.EMF_Creator;
import facades.PersonFacade;
import javax.persistence.EntityManagerFactory;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

//Todo Remove or change relevant parts before ACTUAL use
@Path("person")
public class PersonResource {

    private static final EntityManagerFactory EMF = EMF_Creator.createEntityManagerFactory(EMF_Creator.DbSelector.DEV, EMF_Creator.Strategy.CREATE);
    private static final IPersonFacade FACADE = PersonFacade.getPersonFacade(EMF);
    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();
    
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public String demo() {
        return "{\"msg\":\"Hello World\"}";
    }
 
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public String getAllPersonsDTO() {
        PersonsDTO persons = new PersonsDTO(FACADE.getAllPersons());
        return GSON.toJson(persons);
    }

    @Path("{id}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public String getPersonDTObyID(@PathParam("id") int id) throws PersonNotFoundException {
        try {
            PersonDTO person = new PersonDTO(FACADE.getPerson(id));
            return GSON.toJson(person);
        } catch (PersonNotFoundException ex) {
            throw new PersonNotFoundException(ex.getMessage());
        }
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response editPerson(String p) throws PersonNotFoundException {
        try {
            PersonDTO personDTO = GSON.fromJson(p, PersonDTO.class);
            Person person = FACADE.getPerson(personDTO.getId());
            person.editPerson(personDTO);
            PersonDTO responseDTO = new PersonDTO(FACADE.editPerson(person));
            return Response.ok(responseDTO).build();
        } catch (PersonNotFoundException ex) {
            return Response.notModified(ex.getMessage()).build();
        }
    }

    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    @Path("{id}")
    public String deletePerson(@PathParam("id") int id) throws PersonNotFoundException {
        try {
            FACADE.deletePerson(id);
            return "{\"status\": \"deleted\"}";
        } catch (PersonNotFoundException ex) {
            throw new PersonNotFoundException(ex.getMessage());
        }
    }

}
