package com.abhi.flightservices.dto;

public class UpdateReservationRequest {

	private int id;
	private boolean checkIn;
	private int numberOfBags;
	public UpdateReservationRequest() {
		super();
	}
	public UpdateReservationRequest(int id, boolean checkIn, int numberOfBags) {
		super();
		this.id = id;
		this.checkIn = checkIn;
		this.numberOfBags = numberOfBags;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public boolean isCheckIn() {
		return checkIn;
	}
	public void setCheckIn(boolean checkIn) {
		this.checkIn = checkIn;
	}
	public int getNumberOfBags() {
		return numberOfBags;
	}
	public void setNumberOfBags(int numberOfBags) {
		this.numberOfBags = numberOfBags;
	}
	@Override
	public String toString() {
		return "UpdateReservationRequest [id=" + id + ", checkIn=" + checkIn + ", numberOfBags=" + numberOfBags + "]";
	}
	
	
}
