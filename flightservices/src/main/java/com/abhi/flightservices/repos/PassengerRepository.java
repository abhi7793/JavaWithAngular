package com.abhi.flightservices.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abhi.flightservices.entities.Passenger;

public interface PassengerRepository extends JpaRepository<Passenger, Integer> {

}
