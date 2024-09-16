package com.aj.ChallengeApp;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * @author Aj
 * @project ChallengeApp
 * @Since 6/28/2024
 * @Social Discard: aj
 */
@Repository
public interface ChallengeRepository extends JpaRepository <Challenge, Long>  {

    Optional<Challenge> findByMonthIgnoreCase(String month);
}
