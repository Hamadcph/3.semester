/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package REST;

import Entity.Person;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author hamad
 */
@Path("person")
public class PersonResource {

    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();
    private static Person p1 = new Person("Jacob");
    private static Person p2 = new Person("Hamad");
    private static List<Person> persons = new ArrayList();

    public PersonResource() {
        
        if(persons.isEmpty()) {
            p1.setId(1);
            persons.add(p1);
            p2.setId(2);
            persons.add(p2);
        }
        
    }

        
    @Path("all")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public String getAll() {
        return GSON.toJson(persons);
    }

}
