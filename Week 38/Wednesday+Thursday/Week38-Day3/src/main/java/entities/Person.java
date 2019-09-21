package entities;

import DTO.PersonDTO;
import java.io.Serializable;
import java.util.Date;
import java.util.Objects;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Temporal;

@Entity
@NamedQuery(name = "Person.deleteAllRows", query = "DELETE from Person")
public class Person implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    public Person() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    private String firstName;
    private String lastName;
    private String phone;
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date lastEdited;

    public Person(String firstName, String lastName, String phone, Date lastEdited) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.lastEdited = lastEdited;
    }

    public Person(String firstName, String lastName, String phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.lastEdited = new Date();
    }
    
        public void editPerson(PersonDTO p) {
        int counter = 0;
        if (!p.getfName().equals(this.firstName)) {
            this.firstName = p.getfName();
            counter++;
        }
        if (!p.getlName().equals(this.lastName)) {
            this.lastName = p.getlName();
            counter++;
        }
        if (!p.getPhone().equals(this.phone)) {
            this.phone = p.getPhone();
        }
        if (counter > 0) {
            this.lastEdited = new Date();
        }
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Date getLastEdited() {
        return lastEdited;
    }

    public void setLastEdited(Date lastEdited) {
        this.lastEdited = lastEdited;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 89 * hash + this.id;
        hash = 89 * hash + Objects.hashCode(this.firstName);
        hash = 89 * hash + Objects.hashCode(this.lastName);
        hash = 89 * hash + Objects.hashCode(this.phone);
        hash = 89 * hash + Objects.hashCode(this.lastEdited);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Person other = (Person) obj;
        if (this.id != other.id) {
            return false;
        }
        if (!Objects.equals(this.firstName, other.firstName)) {
            return false;
        }
        if (!Objects.equals(this.lastName, other.lastName)) {
            return false;
        }
        if (!Objects.equals(this.phone, other.phone)) {
            return false;
        }
        if (!Objects.equals(this.lastEdited, other.lastEdited)) {
            return false;
        }
        return true;
    }

}
