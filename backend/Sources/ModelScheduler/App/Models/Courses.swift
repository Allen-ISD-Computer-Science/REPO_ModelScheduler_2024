import Vapor
import Fluent
import FluentMySQLDriver
import Crypto

final class Courses: Model, Content {
    static let schema = "Courses_2024"

    @ID(custom: "id", generatedBy: .database)
    var id: Int?

    @Field(key: "courseCode")
    var courseCode: String

    @Field(key: "courseName")
    var courseName: String

    @Field(key: "term")
    var term: String

    @Field(key: "department")
    var department: String

    @Field(key: "periods")
    var periods: [Int]

    @OptionalField(key: "doubleBlockPeriod")
    var doubleBlockPeriod: Int?

    @Field(key: "location")
    var location: String

    init() { }
}
