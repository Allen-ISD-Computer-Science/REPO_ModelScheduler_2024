// Copyright (C) 2023 David Ben-Yaakov
// This program was developed using codermerlin.academy resources.
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see https://www.gnu.org/licenses/.

import Vapor

struct GlobalConfiguration {

    private enum GlobalConfigurationError: Error {
        case missingEnvironmentVariable(key: String)
        case invalidEnvironmentVariableType(key: String, expectedType: Any.Type, actualValue: String) 
    }

    static let cached: GlobalConfiguration = {
        do {
            return try GlobalConfiguration()
        } catch {
            fatalError("Failed to initialize GlobalConfiguration because \(error)")
        }
    }()

    let mysqlHostname: String
    let mysqlPort: Int
    let mysqlUsername: String
    let mysqlPassword: String 
    let mysqlDatabase: String

    private init() throws {
        mysqlHostname = try Self.readEnvironmentVariable(key: "MYSQL_HOSTNAME", asType: String.self)
        mysqlPort = try Self.readEnvironmentVariable(key: "MYSQL_PORT", asType: Int.self)
        mysqlUsername = try Self.readEnvironmentVariable(key: "MYSQL_USERNAME", asType: String.self)
        mysqlPassword = try Self.readEnvironmentVariable(key: "MYSQL_PASSWORD", asType: String.self)
        mysqlDatabase = try Self.readEnvironmentVariable(key: "MYSQL_DATABASE", asType: String.self)
    }

    static private func readEnvironmentVariable<T: LosslessStringConvertible>(key: String, asType type: T.Type) throws -> T {
        guard let value = Environment.get(key) else {
            throw GlobalConfigurationError.missingEnvironmentVariable(key: key)
        }
        guard let typedValue = type.init(value) else {
            throw GlobalConfigurationError.invalidEnvironmentVariableType(key: key, expectedType: type, actualValue: value)
        }
        return typedValue 
    }    
}
