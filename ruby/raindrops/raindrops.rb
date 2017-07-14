class Raindrops
  require 'prime'
  def self.convert number
    factors = number.prime_division.map(&:first)
    if factors.empty? || !(factors & [3,5,7]).any? then return number.to_s end
    factors.map! do |value|
      if value === 3 then value = 'Pling'
      elsif value === 5 then value = 'Plang'
      elsif value === 7 then value = 'Plong'
      else value = nil
      end
    end
    factors.compact * ('')
  end
end

module BookKeeping
  VERSION = 3
end
