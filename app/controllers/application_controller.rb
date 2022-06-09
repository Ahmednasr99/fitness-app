class ApplicationController < ActionController::API

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entitiy_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    incude ActionController::Cookies
























    private

    def render_unprocessable_entitiy_response(invalid)
        render json: {error: invalid.record.errors}, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: {error:"not found"}, status: :not_found
    end













end
