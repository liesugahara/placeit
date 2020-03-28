class Movie < ApplicationRecord
  has_many :bookings
  validates :title, presence: true
  validates :description, presence: true, length: { minimum: 10, maximum: 300 }
  validates :photo_url, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true

  def is_fully_booked? reservation_date
    bookings = Booking.where(movie_id: id).where(date: reservation_date).count
    bookings == 10 
  end

end