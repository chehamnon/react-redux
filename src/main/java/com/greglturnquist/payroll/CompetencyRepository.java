package com.greglturnquist.payroll;

import java.util.Collection;

import com.greglturnquist.payroll.Competency;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author marissa_h
 */
@RepositoryRestResource
public interface CompetencyRepository extends JpaRepository<Competency, Long> {
	Competency save(Competency manager);
	Collection<Competency> findById(int id);
}