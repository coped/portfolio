module ApplicationHelper
    def full_title(title = "Dennis Cope")
        title == "Dennis Cope" ? title : title + " | Dennis Cope"
    end
end
