package com.abhi.flightservices.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abhi.flightservices.entities.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation, Integer> {

}
