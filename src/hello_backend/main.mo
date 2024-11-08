import Array "mo:base/Array";
import Buffer "mo:base/Buffer";

actor {
    // Create a buffer to store submitted names
    private let nameBuffer = Buffer.Buffer<Text>(0);

    // Update call - stores name and returns greeting
    public func greet(name : Text) : async Text {
        nameBuffer.add(name);
        return "Hello, " # name # "!";
    };

    // Query call - returns all submitted names
    public query func submittedNames() : async [Text] {
        return Buffer.toArray(nameBuffer);
    };
}