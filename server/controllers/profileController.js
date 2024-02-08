exports.getProfile = async (req, res) => {
  try {
    // Fetch the user profile from the database based on the user's ID
    const userId = req.user.id; // Assuming you have implemented user authentication middleware
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return the user profile data to the client
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    // Fetch the user profile from the database based on the user's ID
    const userId = req.user.id; // Assuming you have implemented user authentication middleware
    let user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update the user profile with the data sent in the request body
    const { name, address, contactDetails, documents } = req.body;
    user.name = name || user.name;
    user.address = address || user.address;
    user.contactDetails = contactDetails || user.contactDetails;
    user.documents = documents || user.documents;

    // Save the updated user profile to the database
    user = await user.save();

    // Return the updated user profile data to the client
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.uploadDocuments = async (req, res) => {
  try {
    // Fetch the user profile from the database based on the user's ID
    const userId = req.user.id; // Assuming you have implemented user authentication middleware
    let user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Process uploaded documents (you may need to use a file upload middleware like multer)
    const { identificationProofs, photographs } = req.body;
    // Handle file upload logic here...

    // Update the user's documents with the file paths or other relevant data
    user.identificationProofs =
      identificationProofs || user.identificationProofs;
    user.photographs = photographs || user.photographs;

    // Save the updated user profile with documents to the database
    user = await user.save();

    // Return the updated user profile data to the client
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
