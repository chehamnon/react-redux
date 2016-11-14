package com.greglturnquist.payroll;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;
import javax.persistence.Version;

import lombok.Data;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * @author Marissa
 */
// tag::code[]
@Data
@Entity
public class Competency {

	@Id @GeneratedValue(strategy=GenerationType.AUTO) Long id;
	 	@Column
	    private String name;

	    @Column
	    private String previous;

	    @Column
	    private String latest;

	    @Column
	    private String note;

		private Competency() {}

	    public Competency(String name, String previous, String latest, String note) {
	        this.name = name;
	        this.previous = previous;
	        this.latest = latest;
	        this.note = note;
	}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getPrevious() {
			return previous;
		}

		public void setPrevious(String previous) {
			this.previous = previous;
		}

		public String getLatest() {
			return latest;
		}
		public void setLatest(String latest) {
			this.latest = latest;
		}
		public String getNote() {
			return note;
		}

		public void setNote(String note) {
			this.note = note;
		}
	    
}
// end::code[]
