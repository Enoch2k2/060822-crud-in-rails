class Movie < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  validates :release_date, presence: true
  validates :genre, presence: true
  validates :description, presence: true
  validate :validate_date_of_release_date
  ### Release Date can only be set to today or previous

  def validate_date_of_release_date
    if self.release_date && self.release_date > Date.today
      errors.add(:release_date, "can't be in the future")
    end
  end
end
