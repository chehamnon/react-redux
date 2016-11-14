package com.greglturnquist.payroll;

import com.greglturnquist.payroll.Competency;
import com.greglturnquist.payroll.CompetencyRepository;
import com.fasterxml.jackson.databind.util.JSONPObject;

import net.minidev.json.JSONObject;

import org.apache.log4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CompetencyController {
    private final org.slf4j.Logger log = LoggerFactory.getLogger(this.getClass());

    @Autowired
    CompetencyRepository compRepository;

    @RequestMapping(value="/api/competencies", method = RequestMethod.GET)
    public ResponseEntity<List<Competency>> competencies() {
        List<Competency> competencies = (List<Competency>)compRepository.findAll();
        return new ResponseEntity<>(competencies, HttpStatus.OK);
    }
    
    @RequestMapping(value="/api/competencies", method = RequestMethod.POST)
    public ResponseEntity<Object> createCompetency(@RequestBody Competency competency){
        JSONObject entity = new JSONObject();
        try {
            if (!competency.getName().isEmpty()){
                entity.put("result",compRepository.save(competency));
                entity.put("success", true);
            }else{
                throw new Exception("Title should not be blank");
            }
        }catch (Exception e){
            e.printStackTrace();
            log.error(e.getMessage());
            entity.put("result",e.getMessage());
            entity.put("success", false);
        }
        return new ResponseEntity<>(entity, HttpStatus.OK);
    }

    @RequestMapping(value="/api/competencies", method = RequestMethod.PUT)
    public ResponseEntity<Object> modifyCompetency(@RequestBody Competency competency){
        JSONObject entity = new JSONObject();
        try {
            if (!competency.getName().isEmpty()){
                entity.put("result",compRepository.save(competency));
                entity.put("success", true);
            }else{
                throw new Exception("Name should not be blank");
            }
        }catch (Exception e){
            e.printStackTrace();
            log.error(e.getMessage());
            entity.put("result",e.getMessage());
            entity.put("success", false);
        }
        return new ResponseEntity<>(entity, HttpStatus.OK);
    }
}