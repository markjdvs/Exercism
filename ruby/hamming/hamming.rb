module BookKeeping
  VERSION = 3
end

class Hamming
  def self.compute(strand_one, strand_two)
    raise ArgumentError if strand_one.size != strand_two.size
    strand_to_test = strand_two.chars.zip strand_one.chars
    @differences = 0;
    strand_to_test.each_with_index do |strand, index|
      if strand[0] != strand[1] then @differences += 1 end
    end
    @differences
  end
end
