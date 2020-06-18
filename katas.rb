# 2020.06.18
    # 7kyu - Alternate capitalization
    def capitalize(s)
        odd = []
        even = []
        
        s.split(//).each_with_index do |letter,index|
            if index % 2 == 0
                odd.push(letter.upcase)
                even.push(letter.downcase)
            else
                odd.push(letter.downcase)
                even.push(letter.upcase)
            end
        end
        
        return [odd.join(),even.join()]
    end      