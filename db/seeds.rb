u1 = User.create(first_name: "Alex", last_name: "Manzi", password_digest: BCrypt::Password.create('123'), email: "Alex.Manzi22@gmail.com", organization: "Flatiron School")
u2 = User.create(first_name: "Tika", last_name: "Mahajan", password_digest: BCrypt::Password.create('123'), email: "Tika@gmail.com", organization: "Dataminr")

c1 = Client.create(name: "Boba Bola", budget: 1200, contact_info: "Jimmy", comments: "comments go here", station: "Z100", user: u1)
c2 = Client.create(name: "Bepsi", budget: 1200, contact_info: "Jimmy", comments: "comments go here", station: "Z100", user: u1)
c3 = Client.create(name: "Bevin Up", budget: 1200, contact_info: "Jimmy", comments: "comments go here", station: "Z100", user: u1)
c4 = Client.create(name: "Br. Bebber", budget: 1200, contact_info: "Jimmy", comments: "comments go here", station: "Z100", user: u1)
c5 = Client.create(name: "Banta", budget: 1200, contact_info: "Jimmy", comments: "comments go here", station: "Z100", user: u1)
c6 = Client.create(name: "Brite", budget: 1200, contact_info: "Jimmy", comments: "comments go here", station: "Z100", user: u1)
c7 = Client.create(name: "Belch's", budget: 1200, contact_info: "Jimmy", comments: "comments go here", station: "Z100", user: u1)

r1 = Reservation.create(name: "Spring vibes!", price:100, isci_code: "17567", spot_time:"10:00:00", spot_preview:"5/9/2022", comments: "", client: c1, spot_length: 30)
r2 = Reservation.create(name: "Spring vibes!", price:80, isci_code: "17567", spot_time:"11:00:00", spot_preview:"5/10/2022", comments: "", client: c1, spot_length: 30)
r3 = Reservation.create(name: "Spring vibes!", price:50, isci_code: "17567", spot_time:"10:00:00", spot_preview:"5/11/2022", comments: "", client: c1, spot_length: 15)
r4 = Reservation.create(name: "Spring vibes!", price:100, isci_code: "17567", spot_time:"11:00:00", spot_preview:"5/12/2022", comments: "", client: c1, spot_length: 15)

p1 = Planpack.create(name: "basic", stripe_id: "price_1Kv5iiIrI1eSQgI5P5KYJqsI")
p2 = Planpack.create(name: "small", stripe_id: "price_1Kv5jBIrI1eSQgI5NEtr3Tw7")
p3 = Planpack.create(name: "enterprise", stripe_id: "price_1Kv5jYIrI1eSQgI5JfE6kJlW")
# name: stripe id: product_id