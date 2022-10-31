class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :cohort_id
  belongs_to :cohort
end
