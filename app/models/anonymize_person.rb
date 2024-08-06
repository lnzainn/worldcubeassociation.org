def anonymize_person
  session[:anonymize_params] = {}
  session[:anonymize_step] = nil
  @anonymize_person = AnonymizePerson.new(session[:anonymize_params])
  @anonymize_person.current_step = session[:anonymize_step]
end

def do_anonymize_person
  session[:anonymize_params].deep_merge!(params[:anonymize_person].permit(:person_wca_id)) if params[:anonymize_person]
  @anonymize_person = AnonymizePerson.new(session[:anonymize_params])
  @anonymize_person.current_step = session[:anonymize_step]

  if @anonymize_person.valid?
    if params[:back_button]
      @anonymize_person.previous_step!
    elsif @anonymize_person.last_step?
      do_anonymize_person_response = @anonymize_person.do_anonymize_person

      if do_anonymize_person_response
        if do_anonymize_person_response[:warning]
          flash.now[:warning] = do_anonymize_person_response[:warning]
        elsif do_anonymize_person_response[:new_wca_id]
          flash.now[:success] = "Successfully anonymized #{@anonymize_person.person_wca_id} to #{do_anonymize_person_response[:new_wca_id]}! Don't forget to run Compute Auxiliary Data and Export Public."
          @anonymize_person = AnonymizePerson.new
        else
          flash.now[:danger] = do_anonymize_person_response[:error] || "Error anonymizing"
        end
      else
        flash.now[:danger] = "Error anonymizing"
      end
    else
      @anonymize_person.next_step!
    end

    session[:anonymize_step] = @anonymize_person.current_step
  end

  render 'anonymize_person'
end
