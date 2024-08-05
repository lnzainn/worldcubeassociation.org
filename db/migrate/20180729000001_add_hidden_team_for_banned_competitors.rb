# frozen_string_literal: true

class AddHiddenTeamForBannedCompetitors < ActiveRecord::Migration[5.1]
  def change
    Team.create(friendly_id: 'banned', rank: 90, email: "integrity@worldcubeassociation.org", hidden: true)
  end
end
