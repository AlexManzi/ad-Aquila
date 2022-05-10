u1 = User.create(first_name: "Alex", last_name: "Manzi", password_digest: BCrypt::Password.create('123'), email: "Alex.Manzi22@gmail.com", organization: "Flatiron School")
u2 = User.create(first_name: "Tika", last_name: "Mahajan", password_digest: BCrypt::Password.create('123'), email: "Tika@gmail.com", organization: "Dataminr")

c1 = Client.create(name: "Boba Bola", budget: "1,200", contact_info: "Jimmy", comments: "comments go here", station: "Z100", user: u1)
c2 = Client.create(name: "Bepsi", budget: "1,200", contact_info: "Jimmy", comments: "comments go here", station: "Z100", user: u1)
c3 = Client.create(name: "Bevin Up", budget: "1,200", contact_info: "Jimmy", comments: "comments go here", station: "Z100", user: u1)
c4 = Client.create(name: "Br. Bebber", budget: "1,200", contact_info: "Jimmy", comments: "comments go here", station: "Z100", user: u1)
c5 = Client.create(name: "Banta", budget: "1,200", contact_info: "Jimmy", comments: "comments go here", station: "Z100", user: u1)
c6 = Client.create(name: "Brite", budget: "1,200", contact_info: "Jimmy", comments: "comments go here", station: "Z100", user: u1)
c7 = Client.create(name: "Belch's", budget: "1,200", contact_info: "Jimmy", comments: "comments go here", station: "Z100", user: u1)

r1 = Reservation.create(name: "Spring vibes!", price:1400, isci_code: "17567", spot_time:"10am", spot_preview:"", comments: "", client: c1, spot_length: 30, dates: "5/9/2022")
r2 = Reservation.create(name: "Spring vibes!", price:1400, isci_code: "17567", spot_time:"11am", spot_preview:"", comments: "", client: c1, spot_length: 30, dates: "5/10/2022")
r3 = Reservation.create(name: "Spring vibes!", price:1400, isci_code: "17567", spot_time:"10am", spot_preview:"", comments: "", client: c1, spot_length: 15, dates: "5/11/2022")
r4 = Reservation.create(name: "Spring vibes!", price:1400, isci_code: "17567", spot_time:"11am", spot_preview:"", comments: "", client: c1, spot_length: 15, dates: "5/12/2022")


# name: stripe id: product_id