class WorkoutsController < ApplicationController
            # Group Activity => Set 'is_admin' to Fire Only Before Create + Destroy Actions

           # before_action :is_authorized only: [:create, :update , :destroy]

            # - We only want Admins to have the capability to create / destroy diets
        def index 
            render json: Workout.all
        end 
    
        
        def show
            workout = Workout.find(params[:id])
            render json: workout
        end

        def create
            workout = Workout.create!(workout_params)
            render json: workout, status: :created
        end

        def update
            workout = Workout.find(params[:id])
            workout.update!(workout_params)
            render json: workout, status: :created
        end

        def destroy
            workout = Workout.find(params[:id])
            workout.destroy
            head :no_content
        end
    
        private
    
        def workout_params
            params.permit(:monday, :tuesday, :wednesday, :thursday, :saturday, :sunday)
        end
end
