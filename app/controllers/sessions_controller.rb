class SessionsController < ApplicationController

    def login
        user = User.find_by(name:params[:username])
        if user&.authenticate(params[:password])
            session[:current_user] = user.id               
            session[:login_attempts]=0
            render json:user, status: :ok
        else
            session[:login_attempts]||=0
            session[:login_attempts]+=1
            render json:{error:"invalid username or password"}, status: :unauthorized
        end
    end
end
