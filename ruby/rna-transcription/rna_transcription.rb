class Complement
  def self.of_dna(strand)
    if strand.chars.include? "X" then return strand = ""
    elsif strand.chars.include? "U" then return strand = ""
    else strand.tr("GCTA", "CGAU")
    end
  end
end

module BookKeeping
  VERSION = 4
end
