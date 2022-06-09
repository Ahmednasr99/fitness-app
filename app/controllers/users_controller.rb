class UsersController < ApplicationController
    # Group Activity => Set 'authorize_user' to Skip Create Action

    # GET "/users"
    def index 
        render json: User.all
    end 

    # GET "/users/:id"
    def show
        #current_user = User.find_by(id: session[:current_user])
        render json: current_user
    end 

    # POST "/users"
    def create
        user = User.create!(user_params)
        session[:current_user] = user.id

        render json: user, status: :created

    end 

    # PUT "/users/:id"
    def update
        # if the current-user is admin
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :created
    end

    # DELETE "/users/:id"
    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

    private 

    def user_params
        params.permit(:name, :email, :admin, :password)
    end 
end
