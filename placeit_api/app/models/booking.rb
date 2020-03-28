class Booking < ApplicationRecord
  belongs_to :movie
  validates :name, presence: true
  validates :email, presence: true
  validates :date, presence: true
  validates :id_number, presence: true
  validates :mobile_phone, presence: true
  validates :movie, presence: true

  

end