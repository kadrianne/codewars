# 2020.09.01
    # 6kyu - Title Case
    def title_case(title, minor_words = '')
        splitTitle = title.capitalize.split
        
        i = 1
        while i < splitTitle.length do
            word = splitTitle[i]

            if !minor_words.downcase.split.include?(word.downcase)
                splitTitle[i] = word.capitalize
            end
            
            i += 1
        end
        
        splitTitle.join(" ")
    end

    def title_case(title, minor_words = '')
        title.capitalize.split.map {|word| minor_words.downcase.split.include?(word) ? word : word.capitalize}.join(" ")
    end

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