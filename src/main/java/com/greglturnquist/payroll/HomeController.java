
package com.greglturnquist.payroll;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * @author Greg Turnquist
 */
// tag::code[]
@Controller
public class HomeController {

	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}
	
    @RequestMapping(value = "/home", method = RequestMethod.GET)
    public String Home(){
        return "index";
    }
    
    @RequestMapping(value = "/competency", method = RequestMethod.GET)
    public String Competency(){
        return "index";
    }
    
    @RequestMapping(value = "/about", method = RequestMethod.GET)
    public String About(){
        return "index";
    }
    
//    @RequestMapping(value = "/detailCompetency", method = RequestMethod.GET)
//    public String ManageCompetency(){
//        return "index";
//    }
//    
//    @RequestMapping(value = "/detilCompetency/:id", method = RequestMethod.GET)
//    public String DetailCompetency(){
//        return "index";
//    }

}
// end::code[]