module ApplicationHelper
    def full_title(title)
        if title.empty?
            "Dennis Cope"
        else
            title
        end
    end
end
