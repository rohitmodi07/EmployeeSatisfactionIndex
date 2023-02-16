package com.magnit.employee.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.magnit.employee.model.Answers;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeSatisfactionController {


    @PutMapping("/save")
    public String calculateSatisfactionIndex(@RequestBody Answers answ) throws Exception {
        
    	int yesCount = 0;
    	int noCount = 0;
    	int sometimeCount = 0;
    	
    	List<String> ansList = new ArrayList<>();
    	ansList.add(answ.getAnswer1());
    	ansList.add(answ.getAnswer2());
    	ansList.add(answ.getAnswer3());
    	ansList.add(answ.getAnswer4());
    	ansList.add(answ.getAnswer5());
    	ansList.add(answ.getAnswer6());
    	ansList.add(answ.getAnswer7());
    	ansList.add(answ.getAnswer8());
    	ansList.add(answ.getAnswer9());
    	ansList.add(answ.getAnswer10());
    	
    	for(String val : ansList) {
    		if(val.equalsIgnoreCase("yes")) {
    			yesCount++;
    		}else if(val.equalsIgnoreCase("no")) {
    			noCount++;
    		}else if(val.equalsIgnoreCase("sometime")) {
    			sometimeCount++;
    		}
    	}
    	
    	if(yesCount>noCount) {
    		if(sometimeCount>yesCount) {
    			return "MODERATELY SATISFIED";
    		}else if(yesCount==sometimeCount) {
    			return "SATISFIED";
    		}else {
    			return "HAPPY";
    		}
    	}else {
    		return "NOT SATISFIED";
    	}

    }
}
