package com.greglturnquist.payroll;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import com.greglturnquist.payroll.CompetencyRepository;

/**
 * @author Marissa
 */
// tag::code[]
@Component
public class DatabaseLoader{

	private final CompetencyRepository compRepo;

	@Autowired
	public DatabaseLoader(CompetencyRepository compRepo) {
		this.compRepo = compRepo;
	}
	
//    @Override
//    public void run(String... strings) throws Exception {

        Competency c1 = new Competency("CSS", "None", "Working", "Improve");
        Competency c2 = new Competency("Javascript", "None", "None", "None");
//        ArrayList<Comment> cp1 = new ArrayList<Comment>(){{
//           add(new Comment("mell", "cute", p1.getPhotoId()));
//           add(new Comment("bryan", "his smile", p1.getPhotoId()));
//           add(new Comment("bella", "sooo cute", p1.getPhotoId()));
//        }};

//        compRepo.save(c1);
//        compRepo.save(c2);
//    }

}
// end::code[]